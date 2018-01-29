import * as React from "react";

import { Data } from '../../common';

export interface MessageProps { message: Data }

export const Message = (props: MessageProps) => <h1>Hello from {props.message.id} and {props.message.text}!</h1>;