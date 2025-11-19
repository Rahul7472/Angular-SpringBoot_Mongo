// Spring Boot MongoDB Entities for Real Estate CRM

package com.springboot.demo.entities;

import com.springboot.demo.entities.models.TenantAware;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


// ================= DOCUMENT ENTITY =================
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "documents")
class PropertyDocument implements TenantAware {
    @Id
    private String id;

    @DBRef
    private Property property;

    private String fileName;
    private String fileType;
    private String fileUrl; // S3 / Local
    private LocalDateTime uploadedAt = LocalDateTime.now();

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

