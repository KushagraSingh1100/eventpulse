package org.kushagra.eventpulse.service;

import org.bson.types.ObjectId;
import org.kushagra.eventpulse.entity.Event;
import org.kushagra.eventpulse.entity.User;
import org.kushagra.eventpulse.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public void addParticipant(User user, Event event){
        event.getParticipants().add(user);
        eventRepository.save(event);
    }
}
