package org.kushagra.eventpulse.controller;

import org.bson.types.ObjectId;
import org.kushagra.eventpulse.entity.Event;
import org.kushagra.eventpulse.entity.User;
import org.kushagra.eventpulse.service.EventService;
import org.kushagra.eventpulse.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private EventService eventService;

    @PostMapping("/register/event/{id}")
    public ResponseEntity<?> registerEvent(@PathVariable String id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        ObjectId eventId = new ObjectId(id);
        User user = userService.findByEmail(email);
        Optional<Event> event = eventService.findById(eventId);
        if(event.isPresent() && user!=null) {
            Event event_reg = event.get();
            boolean flag1 = userService.registerEvent(user, event_reg);
            boolean flag2 = eventService.addParticipant(user, event_reg);
            if(flag1 && flag2){
                return new ResponseEntity<>(HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PostMapping("/pin/event/{id}")
    public ResponseEntity<?> pinEvent(@PathVariable String id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        ObjectId eventId = new ObjectId(id);
        User user = userService.findByEmail(email);
        Optional<Event> event = eventService.findById(eventId);
        if(event.isPresent() && user!=null) {
            Event event_pin = event.get();
            userService.pinEvent(user, event_pin);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/pinned-events")
    public ResponseEntity<?> getPinnedEvents(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findByEmail(email);
        List<Event> pinnedEvents = userService.getPinnedEvents(user);
        if(pinnedEvents!=null){
            Map<String, Object> response = new HashMap<>();
            response.put("pinnedEvents", pinnedEvents);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
