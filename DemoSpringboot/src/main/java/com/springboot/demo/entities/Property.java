// Spring Boot MongoDB Entities for Real Estate CRM

package com.springboot.demo.entities;

import com.springboot.demo.entities.models.TenantAware;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


// ================= PROPERTY ENTITY =================
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "properties")
class Property implements TenantAware {
    @Id
    private String id;
    private String title;
    private String location;
    private Long price;
    private PropertyStatus status;
    private GeoJsonPoint coordinates;
    private LocalDateTime createdAt = LocalDateTime.now();

    public enum PropertyStatus { AVAILABLE, SOLD, PENDING }

    private String tenantId;

    @Override
    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    @Override
    public String getTenantId() {
        return tenantId;
    }
}

