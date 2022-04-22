import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import TranscriptComponent from './components/TranscriptComponent';

const PLUGIN_NAME = 'TranscriptPlugin';

export default class TranscriptPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  
  init(flex, manager) {
    //transcript-sid will come from studio attributes

    flex.TaskCanvasTabs.Content.add(<TranscriptComponent key="gdf-transcript" name="Ricky" flexClientToken={manager.store.getState().flex.session.ssoTokenPayload.token} label="Transcript"/>);
  }
}
