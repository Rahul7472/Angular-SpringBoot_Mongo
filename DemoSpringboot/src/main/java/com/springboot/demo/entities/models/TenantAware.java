package com.springboot.demo.entities.models;

public interface TenantAware {
    void setTenantId(String tenantId);
    String getTenantId();
}
