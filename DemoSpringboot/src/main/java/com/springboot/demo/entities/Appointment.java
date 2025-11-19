// Spring Boot MongoDB Entities for Real Estate CRM

package com.springboot.demo.entities;

import com.springboot.demo.entities.models.TenantAware;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

// ================= APPOINTMENT ENTITY =================
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "appointments")
class Appointment implements TenantAware {
    @Id
    private String id;

    @DBRef
    private Client client;

    @DBRef
    private Property property;

    @DBRef
    private User agent;

    private LocalDateTime appointmentDate;
    private AppointmentStatus status;
    private String notes;

    private LocalDateTime createdAt = LocalDateTime.now();

    private String tenantId;

    @Override
    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    @Override
    public String getTenantId() {
        return tenantId;
    }
    public enum AppointmentStatus { SCHEDULED, COMPLETED, CANCELLED }
}
