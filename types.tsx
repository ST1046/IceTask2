import React from "react";

export type RootStackParamList = {
    Screen1: undefined;
    Screen2: {
        studentNumber: string;
        name: string;
        surname: string;
    };
}
