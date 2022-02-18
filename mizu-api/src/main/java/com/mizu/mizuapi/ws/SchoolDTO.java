package com.mizu.mizuapi.ws;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SchoolDTO {
    private Long id;

    private String schoolName;

    private String shortcutName;

    private LocalDate createDate;

    private HostDTO host;

    private String address;

    private String postCode;

    private String city;

    private String country;

    private SchoolType schoolType;

    private KindOfSchool kindOfSchool;
}

