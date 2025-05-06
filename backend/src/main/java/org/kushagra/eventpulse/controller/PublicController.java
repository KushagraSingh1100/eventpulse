package org.kushagra.eventpulse.controller;

import org.bson.types.ObjectId;
import org.kushagra.eventpulse.entity.Event;
import org.kushagra.eventpulse.entity.User;
import org.kushagra.eventpulse.service.EventService;
import org.kushagra.eventpulse.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private UserService userService;
    @Autowired
    private EventService eventService;

    @PostMapping("/signup/student")
    public void signupStudent(@RequestBody User user) {
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setProfile_picture(user.getProfile_picture());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setCity(user.getCity());
        newUser.setInterests(user.getInterests());
        newUser.setCountry(user.getCountry());
        newUser.setAbout(user.getAbout());
        newUser.setEvents_participated(user.getEvents_participated());
        newUser.setEvents_won(user.getEvents_won());
        newUser.setPortfolio_link(user.getPortfolio_link());
        userService.saveStudentUser(newUser);
    }

    @PostMapping("/signup/admin")
    public void signupAdmin(@RequestBody User user) {
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setProfile_picture(user.getProfile_picture());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setCity(user.getCity());
        newUser.setInterests(user.getInterests());
        newUser.setCountry(user.getCountry());
        newUser.setAbout(user.getAbout());
        newUser.setEvents_participated(user.getEvents_participated());
        newUser.setEvents_won(user.getEvents_won());
        newUser.setPortfolio_link(user.getPortfolio_link());
        userService.saveAdminUser(newUser);
    }

    @GetMapping("/all-events")
    public ResponseEntity<?> getall(){
        List<Event> all = eventService.getall();
        if(all!=null){
            return new ResponseEntity<>(all, HttpStatus.OK);
        }
        return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/id/{eventId}")
    public ResponseEntity<Event> geteventById(@PathVariable String eventId){
        ObjectId id = new ObjectId(eventId);
        Optional<Event> foundEvent = eventService.findById(id);
        if(foundEvent.isPresent()){
            return new ResponseEntity<>(foundEvent.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
