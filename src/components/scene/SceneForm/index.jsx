import React from "react";
import { Column, FlexContainer, RightAlign } from "../../layout";
import { Input, Button } from "../../reusable";
import { SceneFormWrapper } from "./styles";

const SceneForm = ({ values }) => {
  const [title, setTitle] = React.useState("");
  const [setting, setSetting] = React.useState("");

  /**
   * The order will be a number. Users can update this and it should re-arrange the scenes in order, in real-time.
   */
  const [parent, setParent] = React.useState("");
  const [characters, setCharacters] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <SceneFormWrapper>
      <h2>Create a Scene</h2>
      <div>
        <FlexContainer>
          <Column>
            <Input
              label="Title"
              onChange={setTitle}
              value={title}
              placeholder="Title of scene"
            />
          </Column>
          <Column>
            <Input
              label="Setting"
              onChange={setSetting}
              value={setting}
              placeholder="Where this takes place"
            />
          </Column>
        </FlexContainer>
        <FlexContainer>
          <Column>
            <Input
              label="Parent ID"
              onChange={setParent}
              value={parent}
              placeholder="Parent story or character"
            />
          </Column>
          <Column>
            <Input
              label="Characters"
              onChange={setCharacters}
              value={characters}
              placeholder="Characters involved"
            />
          </Column>
        </FlexContainer>
        <FlexContainer>
          <Input
            label="Description"
            onChange={setDescription}
            value={description}
            textarea
            placeholder="What happens?"
          />
        </FlexContainer>
      </div>
      <FlexContainer>
        <RightAlign>
          <Button>Submit</Button>
        </RightAlign>
      </FlexContainer>
    </SceneFormWrapper>
  );
};

export default SceneForm;
