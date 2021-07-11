import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Validations from "./Validation";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import JobAdvertService from "../../services/jobAdvertService";
import WorkTimeService from "../../services/workTimeService";
import WorkPlaceService from "../../services/workPlaceService";

function JobAdvertForm() {
  let jobAdvertService = new JobAdvertService();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      cityId: "",
      workPlaceId: "",
      workTimeId: "",
      salaryMax: "",
      salaryMin: "",
      openPositionCount: "",
      description: "",
      applicationDeadline: "",
    },
    validationSchema: Validations,
    onSubmit: (values) => {
      values.employerId = 13;
      jobAdvertService.addJobAdvert(values).then((result) => {
          console.log("buraya geldi")
          alert("eklendi");
          history.push("/jobAdverts");
        }).catch((err) => console.log(values));
        
    },
  });

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let workTimeService = new WorkTimeService();
    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));

    let workPlaceService = new WorkPlaceService();
    workPlaceService
      .getWorkPlaces()
      .then((result) => setWorkPlaces(result.data.data));

    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.title,
    value: jobPosition.id,
  }));

  const workTimeOption = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.workingTime,
    value: workTime.id,
  }));

  const workPlaceOption = workPlaces.map((workPlace, index) => ({
    key: index,
    text: workPlace.workplace,
    value: workPlace.id,
  }));

  // const workTimeOption = [
  //   { key: 1, text: "Full Time", value: "Full Time" },
  //   { key: 2, text: "Part Time", value: "Part Time" },
  //   { key: 3, text: "Intern", value: "Intern" },
  // ];
  // const workPlaceOption = [
  //   { key: 1, text: "Office", value: "Office" },
  //   { key: 2, text: "Hybrid", value: "Hybrid" },
  //   { key: 3, text: "Remote", value: "Remote" },
  // ];

  return (
      <div>
        <Card fluid>
          <Card.Content header="Add Job Adverts" />
          <Card.Content>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Field style={{ marginBottom: "1rem" }}>
                <Dropdown
                  id="jobPositionId"
                  clearable
                  placeholder="Job Position"
                  search
                  selection
                  onChange={(fieldName, data) =>
                    formik.setFieldValue("jobPositionId", data.value)
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.jobPositionId}
                  options={jobPositionOption}
                />
                {formik.errors.jobPositionId &&
                  formik.touched.jobPositionId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.jobPositionId}
                    </div>
                  )}
              </Form.Field>

              <Form.Field>
                <Dropdown
                  id="cityId"
                  clearable
                  placeholder="City"
                  search
                  selection
                  onChange={(fieldName, data) =>
                    formik.setFieldValue("cityId", data.value)
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.cityId}
                  options={cityOption}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}
              </Form.Field>

              {/* <Form.Field>
                <Dropdown
                  placeholder="Select Work Time"
                  clearable
                  fluid
                  selection
                  options={workTimeOption}
                />
              </Form.Field> */}
              {/* <Form.Field>
                <Dropdown
                  clearable
                  placeholder="Select Work Place"
                  fluid
                  selection
                  options={workPlaceOption}
                />
              </Form.Field> */}

              <Form.Field>
                <Dropdown
                  id="workTimeId"
                  clearable
                  placeholder="Select Working Time"
                  search
                  selection
                  onChange={(fieldName, data) =>
                    formik.setFieldValue("workTimeId", data.value)
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.workTimeId}
                  options={workTimeOption}
                />
                {formik.errors.workTimeId && formik.touched.workTimeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workTimeId}
                  </div>
                )}
              </Form.Field>

              <Form.Field>
                <Dropdown
                  id="workPlaceId"
                  clearable
                  placeholder="Select Workplace"
                  search
                  selection
                  onChange={(fieldName, data) =>
                    formik.setFieldValue("workPlaceId", data.value)
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.workPlaceId}
                  options={workPlaceOption}
                />
                {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workPlaceId}
                  </div>
                )}
              </Form.Field>

              <Form.Field>
                <Grid>
                  <Grid.Column width={8}>
                    <Input
                      style={{ width: "100%" }}
                      type="number"
                      name="salaryMin"
                      placeholder="Minimun salary range"
                      onChange={formik.handleChange}
                      value={formik.values.salaryMin}
                      onBlur={formik.handleBlur}
                    ></Input>
                    {formik.errors.salaryMax && formik.touched.salaryMax && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.salaryMax}
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Input
                      style={{ width: "100%" }}
                      name="salaryMax"
                      type="number"
                      placeholder="Maximum salary range"
                      onChange={formik.handleChange}
                      value={formik.values.salaryMax}
                      onBlur={formik.handleBlur}
                    ></Input>
                    {formik.errors.salaryMax && formik.touched.salaryMax && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.salaryMax}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <Input
                      style={{ width: "100%" }}
                      name="openPositionCount"
                      type="number"
                      placeholder="Number of open positions"
                      onChange={formik.handleChange}
                      value={formik.values.openPositionCount}
                      onBlur={formik.handleBlur}
                    ></Input>
                    {formik.errors.openPositionCount &&
                      formik.touched.openPositionCount && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.openPositionCount}
                        </div>
                      )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Input
                      style={{ width: "100%" }}
                      name="applicationDeadline"
                      type="date"
                      placeholder="Application Deadline"
                      onChange={formik.handleChange}
                      value={formik.values.applicationDeadline}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.applicationDeadline &&
                      formik.touched.applicationDeadline && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.applicationDeadline}
                        </div>
                      )}
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  style={{ minHeight: 100 }}
                  name="description"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>

              <Button
                content="Add"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ backgroundColor: "blue" }}
              />

              <Button
                content="Clear"
                type="reset"
                labelPosition="right"
                icon="delete"
                onClick={formik.handleReset}
                style={{ marginLeft: "600px" }}
                disabled={!formik.dirty || formik.isSubmitting}
              />
            </Form>
          </Card.Content>
        </Card>
      </div>
    
  );
}

export default JobAdvertForm;
