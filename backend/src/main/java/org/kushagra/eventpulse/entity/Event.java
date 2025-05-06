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
    private String img_url = "https://media.istockphoto.com/id/1218975473/photo/group-of-college-student-friends-meeting-and-talking-in-busy-communal-campus-building.jpg?s=612x612&w=0&k=20&c=ggYncioFDbZjXryC923y3Jmdc3uNFAsmZML-ftZYXYI=";
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
    @DBRef
    private List<User> participants = new ArrayList<>();
}
