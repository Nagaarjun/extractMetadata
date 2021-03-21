import * as React from "react";
import {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {fetchMetaData} from "../containers/ApiContainer";

const Title = styled.h1`
  font-size: 1.5em;
  color: #747676;
  text-align: center;
  padding: 10px;
`;

const CenterDiv = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 70%;
  height: 50%;
  overflow-y: scroll;
`;
export const getMetaData:React.FC = () => {
    const [url, setUrl] = React.useState<string>("");
    const [metaData,setMetaData] = React.useState<any>(undefined);
    const isURL = (str:string) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
      }
   const handleSubmit = async (e: any) => {
        e.preventDefault(); 
        if (isURL(url))  {
            let resp = await fetchMetaData(url);
            setMetaData(resp);
        } 
    };
    return (<>
        <Title>Welcome to Meta Data Extracter</Title>
        <CenterDiv>
            <form onSubmit={(e) => {handleSubmit(e)}}>
            <div className="form-group">
              <label>Enter URL:</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Enter URL"
                name="url"
                onChange={(e) => {setUrl(e.target.value);setMetaData(undefined)}}
              />
            </div>
            <button
                type="submit"
                value="register"
                className="btn btn-primary"
            >
                    Submit
            </button>
            <pre>{JSON.stringify(metaData, null, 4)}</pre>
            </form>
        </CenterDiv>
    </>);
}