// Spring Boot MongoDB Entities for Real Estate CRM

package com.springboot.demo.entities;

import com.springboot.demo.entities.models.TenantAware;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

// ================= ACTIVITY ENTITY =================
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "activities")
public class Activity implements TenantAware {
    @Id
    private String id;

    private String tenantId;

    @DBRef
    private Client client;

    @DBRef
    private User createdBy;

    private ActivityType type; // CALL / EMAIL / MEETING
    private String message;
    private LocalDateTime createdAt = LocalDateTime.now();

    @Override
    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    @Override
    public String getTenantId() {
        return tenantId;
    }

    public enum ActivityType { CALL, EMAIL, MEETING, NOTE }
}
