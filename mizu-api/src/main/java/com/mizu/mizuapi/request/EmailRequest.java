package com.mizu.mizuapi.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailRequest {
   private String from;
   private String message;
   private String subject;
}
