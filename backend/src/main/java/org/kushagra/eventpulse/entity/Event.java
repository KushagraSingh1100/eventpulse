package org.kushagra.eventpulse.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "events")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    private ObjectId id;
    @Builder.Default
    private String img_url = "https://link-shortner-ehv0.onrender.com/pDCCYDZ2";
    @Indexed(unique = true)
    private String title;
    private String description;
    private Date date;
    private String location;
    private List<String> tags;
    private Integer duration;
    private Integer entry_fee;
    private Integer team_size;
    private Integer max_participants;
    private Integer registered_participants;
    private Integer prize;
    private List<String> attachments;
    private List<String> contacts;
    private List<String> participants = new ArrayList<>();
}
