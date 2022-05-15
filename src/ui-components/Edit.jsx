/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Question } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Edit(props) {
  const { question, overrides, ...rest } = props;
  const [
    textFieldThreeOneFourNineTwoNineFiveThreeValue,
    setTextFieldThreeOneFourNineTwoNineFiveThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoNineFiveFourValue,
    setTextFieldThreeOneFourNineTwoNineFiveFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoNineFiveFiveValue,
    setTextFieldThreeOneFourNineTwoNineFiveFiveValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      Category: textFieldThreeOneFourNineTwoNineFiveThreeValue,
      ActualQuestion: textFieldThreeOneFourNineTwoNineFiveFourValue,
      Answer: textFieldThreeOneFourNineTwoNineFiveFiveValue,
    },
    id: question?.id,
    model: Question,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeOneFourNineTwoNineFiveThreeValue === "" &&
      question !== undefined &&
      question?.Category !== undefined
    )
      setTextFieldThreeOneFourNineTwoNineFiveThreeValue(question?.Category);
  }, [question]);
  useEffect(() => {
    if (
      textFieldThreeOneFourNineTwoNineFiveFourValue === "" &&
      question !== undefined &&
      question?.ActualQuestion !== undefined
    )
      setTextFieldThreeOneFourNineTwoNineFiveFourValue(
        question?.ActualQuestion
      );
  }, [question]);
  useEffect(() => {
    if (
      textFieldThreeOneFourNineTwoNineFiveFiveValue === "" &&
      question !== undefined &&
      question?.Answer !== undefined
    )
      setTextFieldThreeOneFourNineTwoNineFiveFiveValue(question?.Answer);
  }, [question]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Edit")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Question Profile"
            {...getOverrideProps(overrides, "Edit Question Profile")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31492948")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Category"
            placeholder="John Doe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoNineFiveThreeValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoNineFiveThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492953")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Question"
            placeholder="Seattle, WA"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoNineFiveFourValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoNineFiveFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492954")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Answer"
            placeholder="john.doe@awsamplify.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoNineFiveFiveValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoNineFiveFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492955")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31492956")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
