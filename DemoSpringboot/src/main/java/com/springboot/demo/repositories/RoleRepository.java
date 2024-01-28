package com.springboot.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.entities.Role;

@Repository
public interface RoleRepository extends MongoRepository<Role,String>{}
