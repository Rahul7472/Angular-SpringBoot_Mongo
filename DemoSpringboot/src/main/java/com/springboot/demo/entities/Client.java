package com.springboot.demo.entities;

import com.springboot.demo.entities.models.TenantAware;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "clients")
public class Client implements TenantAware {

    @Id
    private String id;

    private String tenantId;

    private ClientType type; // buyer / seller / investor

    private String name;

    private List<String> emails;

    private List<String> phones;

    private PreferredContact preferredContact; // email / phone / both

    private Address address;

    private Requirements requirements;

    @DBRef
    private User createdBy;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Inner classes
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Address {
        private String line1;
        private String city;
        private String state;
        private String postalCode;
        private String country;
        private GeoJsonPoint location; // Coordinates [lng, lat]
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Requirements {
        private Long budgetMin;
        private Long budgetMax;
        private Integer bedrooms;
        private List<String> propertyTypes;
    }

    public enum ClientType {
        BUYER, SELLER, INVESTOR
    }

    public enum PreferredContact {
        EMAIL, PHONE, BOTH
    }
    @Override
    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    @Override
    public String getTenantId() {
        return tenantId;
    }
}
