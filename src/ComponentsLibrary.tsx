import React, { useState, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import DefaultTheme from './lib/assets/themes/default-theme';
import { Icon } from './lib';

interface ComponentExpandableProps {
    children: ReactChild | ReactChildren;
    componentName: string;
}

const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ComponentExpandableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 5px;
    padding: 5px;
`;

const ComponentsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;
    margin: 5px;
    border: 1px solid #00000010;
    width: 1024px;
    border-radius: ${DefaultTheme.borderRadius};
`;

export default function ComponentsLibrary(): JSX.Element {

    const [showComponent, _setShowComponent] = useState<{ [componentName: string]: boolean }>({});
    const setShowComponent = (componentName: string) => {
        const aux = {[componentName]: !!!showComponent[componentName]};
        _setShowComponent({ ...showComponent, ...aux });
    };

    const ComponentExpandable = (props: ComponentExpandableProps): JSX.Element => {
        return (
            <ComponentExpandableContainer>
                <button onClick={() => setShowComponent(props.componentName)}>{(showComponent[props.componentName] ? 'Hide' : 'Show') + ` ${props.componentName}`}</button>
                {showComponent[props.componentName] &&
                    <ComponentsContainer>
                        {props.children}
                    </ComponentsContainer>
                }
            </ComponentExpandableContainer>
        );
    };

    return (
        <PageBody>
            <ComponentExpandable componentName="Icons">
                <Icon name="cog" width="100px" height="100px" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Buttons">
                Buttons
            </ComponentExpandable>
        </PageBody>
    );
}
