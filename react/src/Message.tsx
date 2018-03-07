import * as React from "react";

import { Data } from '../../common';

export interface MessageProps { message: Data }

export const Message = (props: MessageProps) => <h1>{props.message.text} React</h1>;