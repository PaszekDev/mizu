package com.mizu.mizuapi.ws;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HostDTO {
    private Long id;

    private Long userId;

    private String email;

    private String fullName;
}
