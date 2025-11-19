package com.springboot.demo.services;

import com.springboot.demo.entities.User;
import com.springboot.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

	// function to create a new user
	public User createUser(User user) {
        if(Objects.nonNull(user.getProfileData())) {
            mongoTemplate.save(user.getProfileData());
        }
        return userRepository.save(user);
    }
	// function return a user by id or null in case it doesn't exist
    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }
    // function that retrieve all users from database
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    // function that update an existing user in database
    public User updateUser(User user) {
        return userRepository.save(user);
    }
    // function that remove a user from database by it's id
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}