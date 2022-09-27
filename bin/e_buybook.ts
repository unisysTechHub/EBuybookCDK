#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EBuybookStack } from '../lib/e_buybook-stack';

const app = new cdk.App();
new EBuybookStack(app, 'EBuybookStack');
