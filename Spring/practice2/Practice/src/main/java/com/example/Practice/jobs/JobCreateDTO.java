package com.example.Practice.jobs;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.example.Practice.temps.Temp;

public class JobCreateDTO {
	
	
	@NotBlank
	String name;
	
	@NotNull
	String startDate;
	
	@NotNull
	String endDate;
	
	Temp temp;

	public JobCreateDTO(@NotBlank String name, @NotNull String startDate, @NotNull String endDate, Temp temp) {
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.temp = temp;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Temp getTemp() {
		return temp;
	}

	public void setTemp(Temp temp) {
		this.temp = temp;
	}
	
	

	

	
	
	

}
