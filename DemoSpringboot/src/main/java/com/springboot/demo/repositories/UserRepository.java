package com.springboot.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User,String>{}
