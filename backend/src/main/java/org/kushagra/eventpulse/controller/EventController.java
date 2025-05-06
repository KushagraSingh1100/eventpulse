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

import java.util.*;

@RestController
@RequestMapping("/admin/event")
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private UserService userService;

    @PostMapping("/add-event")
    public void addEvent(@RequestBody Event event){
        Event newEvent = new Event();
        newEvent.setImg_url(event.getImg_url());
        newEvent.setTitle(event.getTitle());
        newEvent.setDescription(event.getDescription());
        newEvent.setDate(event.getDate());
        newEvent.setLocation(event.getLocation());
        newEvent.setTags(event.getTags());
        newEvent.setDuration(event.getDuration());
        newEvent.setEntry_fee(event.getEntry_fee());
        newEvent.setTeam_size(event.getTeam_size());
        newEvent.setMax_participants(event.getMax_participants());
        newEvent.setRegistered_participants(event.getRegistered_participants());
        newEvent.setPrize(event.getPrize());
        newEvent.setAttachments(event.getAttachments());
        newEvent.setContacts(event.getContacts());
        newEvent.setParticipants(event.getParticipants());
        eventService.saveEvent(newEvent);
    }

    @DeleteMapping("/delete-event/{eventId}")
    public ResponseEntity<?> deleteEvent(@PathVariable String eventId){
        ObjectId id = new ObjectId(eventId);
        eventService.deleteEvent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/update-event/{id}")
    public ResponseEntity<?> updateEvent(@PathVariable String id, @RequestBody Event newevent){
        ObjectId id1 = new ObjectId(id);
        Optional<Event> old = eventService.findById(id1);
        if(old.isPresent()){
            old.get().setImg_url(newevent.getImg_url() != null && !newevent.getImg_url().equals("") ? newevent.getImg_url() : old.get().getImg_url());
            old.get().setTitle(newevent.getTitle() != null && !newevent.getTitle().equals("") ? newevent.getTitle() : old.get().getTitle());
            old.get().setDescription(newevent.getDescription() != null && !newevent.getDescription().equals("") ? newevent.getDescription() : old.get().getDescription());
            old.get().setDate(newevent.getDate() != null && !newevent.getDate().equals("") ? newevent.getDate() : old.get().getDate());
            old.get().setLocation(newevent.getLocation() != null && !newevent.getLocation().equals("") ? newevent.getLocation() : old.get().getLocation());
            old.get().setTags(newevent.getTags() != null && !newevent.getTags().equals("") ? newevent.getTags() : old.get().getTags());
            old.get().setDuration(newevent.getDuration() != null && !newevent.getDuration().equals("") ? newevent.getDuration() : old.get().getDuration());
            old.get().setEntry_fee(newevent.getEntry_fee() != null && !newevent.getEntry_fee().equals("") ? newevent.getEntry_fee() : old.get().getEntry_fee());
            old.get().setTeam_size(newevent.getTeam_size() != null && !newevent.getTeam_size().equals("") ? newevent.getTeam_size() : old.get().getTeam_size());
            old.get().setMax_participants(newevent.getMax_participants() != null && !newevent.getMax_participants().equals("") ? newevent.getMax_participants() : old.get().getMax_participants());
            old.get().setRegistered_participants(newevent.getRegistered_participants() != null && !newevent.getRegistered_participants().equals("") ? newevent.getRegistered_participants() : old.get().getRegistered_participants());
            old.get().setPrize(newevent.getPrize() != null && !newevent.getPrize().equals("") ? newevent.getPrize() : old.get().getPrize());
            old.get().setAttachments(newevent.getAttachments() != null && !newevent.getAttachments().equals("") ? newevent.getAttachments() : old.get().getAttachments());
            old.get().setContacts(newevent.getContacts() != null && !newevent.getContacts().equals("") ? newevent.getContacts() : old.get().getContacts());
            old.get().setParticipants(newevent.getParticipants() != null && !newevent.getParticipants().equals("") ? newevent.getParticipants() : old.get().getParticipants());
            eventService.saveEvent(old.get());
            return new ResponseEntity<>(old.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
