package com.springboot.demo.filters;

import com.springboot.demo.context.TenantContext;
import com.springboot.demo.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class TenantFilter extends OncePerRequestFilter {

    @Value("${jwt.enableMultiTenancy}")
    private boolean enableMultiTenancy;

    private static final String AUTH_HEADER = "Authorization";

    private final JwtUtil jwtService;


    public TenantFilter(JwtUtil jwtService) {
        this.jwtService = jwtService;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        try {
            if(BooleanUtils.isTrue(enableMultiTenancy)) {
                final String header = request.getHeader("Authorization");
                String token = null;
                String tenantId = null;

                if (header != null && header.startsWith("Bearer ")) {
                    token = header.substring(7);
                    tenantId = jwtService.extractTenantId(token);
                }

                if (tenantId == null || tenantId.isBlank()) {
                    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                    response.getWriter().write("Missing tenant id");
                    return;
                }
                TenantContext.setTenantId(tenantId);
            }
            filterChain.doFilter(request, response);
        } finally {
            TenantContext.clear();
        }
    }
}
