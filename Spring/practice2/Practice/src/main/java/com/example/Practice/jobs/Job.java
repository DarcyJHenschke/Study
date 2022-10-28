package com.example.Practice.jobs;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import com.example.Practice.temps.Temp;


@Entity
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column
	public String name;
	
	@Column
	public String startDate;
	
	@Column
	public String endDate;
	
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="TEMP_ID")
	private Temp temp;
	
	public Job() {
		
	}

	public Job(String name, String startDate, String endDate) {
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Job(String name, String startDate, String endDate, Temp temp) {
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.temp = temp;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
