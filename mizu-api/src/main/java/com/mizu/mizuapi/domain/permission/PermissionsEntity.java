package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.BaseEntityWithId;
import com.mizu.mizuapi.domain.user.UserEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "permissions")
public class PermissionsEntity extends BaseEntityWithId {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    private String groupName;

    private String permission;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "permissions")
    private List<UserEntity> userList;
}
