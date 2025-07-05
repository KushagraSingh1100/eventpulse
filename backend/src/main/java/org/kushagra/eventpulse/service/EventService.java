package org.kushagra.eventpulse.service;

import org.bson.types.ObjectId;
import org.kushagra.eventpulse.entity.Event;
import org.kushagra.eventpulse.entity.User;
import org.kushagra.eventpulse.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Component
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getall(){
        return eventRepository.findAll();
    }

    public Optional<Event> findById(ObjectId id){
        return eventRepository.findById(id);
    }

    public void saveEvent(Event event){
        eventRepository.save(event);
    }

    public void deleteEvent(ObjectId id){
        eventRepository.deleteById(id);
    }

    public boolean addParticipant(User user, Event event){
        if(!event.getParticipants().contains(user.getUsername())){
            event.getParticipants().add(user.getUsername());
            eventRepository.save(event);
            return true;
        }
        else{
            return false;
        }
    }
}
