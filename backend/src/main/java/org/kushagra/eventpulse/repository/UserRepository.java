package org.kushagra.eventpulse.repository;

import lombok.NonNull;
import org.bson.types.ObjectId;
import org.kushagra.eventpulse.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByEmail(String email);

    void deleteByEmail(String email);
}
