import React from "react";
import { SceneDetailsWrapper } from "./styles";
import {
  FlexContainer,
  Column,
  RightAlign,
  Table,
  TableRow,
  TableCell,
} from "../../../../components/layout";
import { Input, Button } from "../../../../components/reusable";

const SceneDetails = (props) => {
  const { editMode, scene, save } = props;

  const [sceneNumber, setSceneNumber] = React.useState("");
  const [sceneTextLink, setSceneTextLink] = React.useState("");
  const [alphaPoint, setAlphaPoint] = React.useState("");
  const [subplots, setSubplots] = React.useState([]);
  const [whatHappens, setWhatHappens] = React.useState("");
  const [consequences, setConsequences] = React.useState("");
  const [whyItMatters, setWhyItMatters] = React.useState("");
  const [theRealization, setTheRealization] = React.useState("");
  const [andSo, setAndSo] = React.useState("");
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    if (scene) {
      setSceneNumber(scene.sceneNumber);
      setAlphaPoint(scene.alphaPoint);
      setSubplots(scene.subplots);
      setWhatHappens(scene.whatHappens);
      setConsequences(scene.consequences);
      setWhyItMatters(scene.whyItMatters);
      setTheRealization(scene.theRealization);
      setAndSo(scene.andSo);
      setTags(scene.tags.join(","));
      setSceneTextLink(scene.sceneTextLink);
    }
  }, [scene]);

  const saveDetails = () => {
    const splitTags = tags.split(",");

    save({
      sceneNumber,
      alphaPoint,
      subplots,
      whatHappens,
      consequences,
      whyItMatters,
      theRealization,
      tags: splitTags,
      sceneTextLink,
    });
  };

  return (
    <SceneDetailsWrapper>
      <FlexContainer>
        <Column>
          <Input
            label="Scene #"
            onChange={setSceneNumber}
            value={sceneNumber}
            placeholder="Enter the scene number"
            uneditable={!editMode}
          />
        </Column>
      </FlexContainer>
      <FlexContainer>
        <Column>
          <Input
            label="Alpha Point"
            onChange={setAlphaPoint}
            value={alphaPoint}
            placeholder="The main point of the scene, e.g. why this scene needs to be in the story"
            uneditable={!editMode}
          />
        </Column>
      </FlexContainer>
      <FlexContainer>
        <Column>
          <Input
            label="Scene Text Link"
            onChange={setSceneTextLink}
            value={sceneTextLink}
            placeholder="A link to the actual text of the scene"
            uneditable={!editMode}
          />
        </Column>
      </FlexContainer>
      <FlexContainer>
        <Column>
          <Input
            label="Tags"
            placeholder="A comma-separated list of tags you can use to search for your scene later"
            onChange={setTags}
            value={tags}
            uneditable={!editMode}
          />
        </Column>
      </FlexContainer>
      <br />
      <FlexContainer>
        <Table>
          <TableRow>
            <TableCell size="1">
              <a href="https://ashlyhilst.com/blog/2018/10/10/how-to-use-the-story-genius-scene-card">
                How to use this
              </a>
            </TableCell>
            <TableCell size="2" heading>
              Cause
            </TableCell>
            <TableCell size="2" heading>
              Effect
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="1" heading>
              The plot
            </TableCell>
            <TableCell size="2">
              <Input
                label="What happens"
                onChange={setWhatHappens}
                value={whatHappens}
                placeholder="What happens in the scene?"
                textarea
                uneditable={!editMode}
              />
            </TableCell>
            <TableCell size="2">
              <Input
                label="The consequences"
                onChange={setConsequences}
                value={consequences}
                placeholder="What are the external consequences of what happens?"
                textarea
                uneditable={!editMode}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="1" heading>
              Third Rail
            </TableCell>
            <TableCell size="2">
              <Input
                label="Why it matters"
                onChange={setWhyItMatters}
                value={whyItMatters}
                placeholder="Why does what happened matter to the protagonist's internal struggle?"
                textarea
                uneditable={!editMode}
              />
            </TableCell>
            <TableCell size="2">
              <Input
                label="The realization"
                onChange={setTheRealization}
                value={theRealization}
                placeholder="What does the protagonist realize as a result of all this?"
                textarea
                uneditable={!editMode}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell size="1" />
            <TableCell size="2" />
            <TableCell size="2">
              <Input
                label="And so?"
                onChange={setAndSo}
                value={andSo}
                placeholder="What is the protagonist going to do next because of this?"
                textarea
                uneditable={!editMode}
              />
            </TableCell>
          </TableRow>
        </Table>
      </FlexContainer>
      {editMode && (
        <>
          <br />
          <FlexContainer>
            <RightAlign>
              <Button onClick={saveDetails}>Submit</Button>
            </RightAlign>
          </FlexContainer>
        </>
      )}
    </SceneDetailsWrapper>
  );
};

export default SceneDetails;
