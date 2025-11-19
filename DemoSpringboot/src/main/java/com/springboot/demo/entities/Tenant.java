package com.springboot.demo.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

// ================= TENANT ENTITY =================
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "tenants")
class Tenant {
    @Id
    private String id;
    private String name;
    private LocalDateTime createdAt = LocalDateTime.now();
}