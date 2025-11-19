package com.springboot.demo.listners;

import com.springboot.demo.context.TenantContext;
import com.springboot.demo.entities.models.TenantAware;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class TenantMongoEventListener extends AbstractMongoEventListener<Object> {

    @Value("${jwt.enableMultiTenancy}")
    private boolean enableMultiTenancy;

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Object> event) {
        if(BooleanUtils.isTrue(enableMultiTenancy)) {
            Object source = event.getSource();
            String tenantId = TenantContext.getTenantId();
            if (tenantId == null) return; // no tenant context

            if (source instanceof TenantAware) {
                TenantAware t = (TenantAware) source;
                // If tenantId not set (new entity) or different, set it
                if (t.getTenantId() == null || t.getTenantId().isBlank()) {
                    t.setTenantId(tenantId);
                }
            }
        }
    }
}
