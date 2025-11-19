// Spring Boot MongoDB Entities for Real Estate CRM

package com.springboot.demo.entities;

import com.springboot.demo.entities.models.TenantAware;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

// ================= DEAL ENTITY =================
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "deals")
class Deal implements TenantAware {
    @Id
    private String id;

    @DBRef
    private Client client;

    @DBRef
    private Property property;

    private Long agreedPrice;
    private DealStatus status;
    private LocalDateTime signedDate;
    private LocalDateTime closingDate;

    public enum DealStatus { INITIATED, SIGNED, CLOSED, CANCELLED }

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

