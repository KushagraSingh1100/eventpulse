package org.kushagra.eventpulse.entity;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private ObjectId id;
    @Builder.Default
    private String profile_picture = "https://link-shortner-ehv0.onrender.com/1XMDsyhjRedirect";
    private String username;
    @Indexed(unique = true)
    @NonNull
    private String email;
    @NonNull
    private String password;
    @NonNull
    private String city;
    @NonNull
    private String country;
    @NonNull
    private String college;
    private String interests;
    private String about;
    private String portfolio_link;
    private List<String> projects;
    private List<String> role;
    @DBRef
    private List<Event> events_participated = new ArrayList<>();
    @DBRef
    private List<Event> events_registered = new ArrayList<>();
    @DBRef
    private List<Event> events_pinned = new ArrayList<>();
    @DBRef
    private List<Event> events_won = new ArrayList<>();
}