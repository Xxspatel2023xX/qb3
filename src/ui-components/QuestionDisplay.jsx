/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function QuestionDisplay(props) {
  const { question, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="542px"
      height="440px"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "QuestionDisplay")}
    >
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Liked")}
      ></Flex>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="510px"
          grow="1"
          basis="510px"
          height="56px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame30772835")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame30772836")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="fit-content"
              alignItems="flex-start"
              shrink="0"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame30772837")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={question?.Category}
                {...getOverrideProps(overrides, "Author")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={question?.Points}
                {...getOverrideProps(overrides, "Timestamp")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={question?.id}
                {...getOverrideProps(overrides, "Lorem ipsum")}
              ></Text>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="225px"
              justifyContent="flex-end"
              alignItems="flex-start"
              grow="1"
              basis="225px"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame30772841")}
            >
              <MyIcon
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                type="more_horiz"
                {...getOverrideProps(overrides, "MyIcon")}
              ></MyIcon>
            </Flex>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={question?.ActualQuestion}
            {...getOverrideProps(
              overrides,
              "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
