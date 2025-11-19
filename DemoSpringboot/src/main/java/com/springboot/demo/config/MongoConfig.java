package com.springboot.demo.config;

import com.springboot.demo.listners.TenantMongoEventListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoConfig {

    @Bean
    public TenantMongoEventListener tenantMongoEventListener() {
        return new TenantMongoEventListener();
    }
}
