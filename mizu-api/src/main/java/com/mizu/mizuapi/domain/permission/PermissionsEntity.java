package com.mizu.mizuapi.domain.permission;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "permissions")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PermissionsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    private String permission;


}
