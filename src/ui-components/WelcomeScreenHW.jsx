/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Flex, View } from "@aws-amplify/ui-react";
export default function WelcomeScreenHW(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="443px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "WelcomeScreenHW")}
    >
      <Flex
        gap="16px"
        position="absolute"
        top="71.65%"
        bottom="25.54%"
        left="-69.37%"
        right="30.94%"
        direction="row"
        width="443px"
        height="12.47px"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Followers")}
      >
        <MyIcon
          width="211px"
          height="17px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="group"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Flex>
    </View>
  );
}
