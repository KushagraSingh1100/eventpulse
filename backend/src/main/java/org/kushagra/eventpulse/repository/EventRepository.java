package org.kushagra.eventpulse.repository;

import org.bson.types.ObjectId;
import org.kushagra.eventpulse.entity.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository extends MongoRepository<Event, ObjectId> {

}
