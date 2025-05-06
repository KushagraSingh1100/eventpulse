package org.kushagra.eventpulse.service;

import org.kushagra.eventpulse.entity.Event;
import org.kushagra.eventpulse.entity.User;
import org.kushagra.eventpulse.repository.EventRepository;
import org.kushagra.eventpulse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import java.util.Arrays;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    private static final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void saveStudentUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Arrays.asList("STUDENT"));
        userRepository.save(user);
    }

    public void saveAdminUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Arrays.asList("ADMIN"));
        userRepository.save(user);
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public void registerEvent(User user, Event event){
        user.getEvents_registered().add(event);
        userRepository.save(user);
    }
}
