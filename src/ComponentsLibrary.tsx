import { Icon, Button, getGlobalTheme, ImageAvatar, Input, setGlobalTheme, LightTheme, DarkTheme, Checkbox, CardBase, Badge } from './lib';
import Icons from './lib/assets/svgs/icons';
import React, { useState, ReactText, useEffect } from 'react';
import styled from 'styled-components';
import useModal from './lib/services/aside-components/modal/index';
import useOverflow from './lib/services/aside-components/overflow/index';
import useToast from './lib/services/aside-components/toast/index';

interface ComponentExpandableProps {
    children: ReactText | JSX.Element | JSX.Element[];
    componentName: string;
}

const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${() => getGlobalTheme().colors.primary.contrast};
    transition: all ${() => getGlobalTheme().transitions.avarage};

    h1 {
        text-align: center;
        font-size: ${() => getGlobalTheme().font.h1.fontSize};
        font-weight: ${() => getGlobalTheme().font.h1.fontWeight};
        color: ${() => getGlobalTheme().colors.primary.principal};
    }
`;

const ComponentExpandableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 5px;
    padding: 5px;
`;

const ComponentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 5px;
    border: 1px solid ${() => getGlobalTheme().colors.primary.principal}32;
    width: 1024px;
    @media screen and (max-width: 1024px) {   
        width: calc(100% - 20px)
    }
    flex-wrap: wrap;
    border-radius: ${() => getGlobalTheme().borderRadius};
    
    .__icon-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px 15px;
        font-size: 10px;
    }
`;

export default function ComponentsLibrary(): JSX.Element {

    const [theme, _setTheme] = useState(LightTheme);
    const setTheme = (theme) => {
        setGlobalTheme(theme);
        _setTheme(theme);
    };

    const [showComponent, _setShowComponent] = useState<{ [componentName: string]: boolean }>({});
    const setShowComponent = (componentName: string) => {
        const aux = { [componentName]: !!!showComponent[componentName] };
        _setShowComponent({ ...showComponent, ...aux });
    };
    const modal = useModal(<div>Modal Service</div>);
    const toast = useToast(<span>Toast Service</span>);
    const overflow = useOverflow(<div>Overflow Service</div>);

    const ComponentExpandable = (props: ComponentExpandableProps): JSX.Element => {
        return (
            <ComponentExpandableContainer>
                {showComponent[props.componentName] &&
                    <Button buttonType="outline" onClick={() => setShowComponent(props.componentName)} text={`Hide ${props.componentName}`} />
                }
                {!showComponent[props.componentName] &&
                    <Button buttonType="solid" onClick={() => setShowComponent(props.componentName)} text={`Show ${props.componentName}`} />
                }
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
            <h1>SmartEPI UI - Components Library</h1>
            <Button buttonType="icon" icon={theme === LightTheme ? 'sun' : 'moon'} onClick={() => theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme)} />
            <ComponentExpandable componentName="Icons">
                {Object.keys(Icons).map(icon => (
                    <div key={icon} className="__icon-container">
                        <Icon name={icon} />
                        <span>{icon}</span>
                    </div>
                ))}
            </ComponentExpandable>
            <ComponentExpandable componentName="Buttons">
                <Button buttonType="solid" text="Solid" />
                <Button buttonType="solid" text="Solid Secondary" color="secondary" />
                <Button buttonType="solid" text="Solid Danger" color="danger" />
                <Button buttonType="solid" text="Solid with Icon" icon="account" />
                <Button buttonType="solid" text="Solid with Icon with iconSize" icon="account" iconSize="80px" />
                <Button buttonType="outline" text="Outline" />
                <Button buttonType="outline" text="Outline Secondary" color="secondary" />
                <Button buttonType="outline" text="Outline Danger" color="danger" />
                <Button buttonType="outline" text="Outline with Icon" icon="account" />
                <Button buttonType="icon" icon="cog" onMouseEnter={(event) => overflow.open(event.target as HTMLElement, true)} />
                <Button buttonType="icon" icon="cog" text="Configurations" />
                <Button buttonType="icon" icon="cog" text="Configurations With iconSize" iconSize="20px" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Services">
                <Button text="Modal" onClick={() => modal.open()} />
                <Button text="Toast" onClick={() => toast.open()} />
                <Button text="Overflow" onClick={(event) => overflow.open(event.target as HTMLElement)} />
            </ComponentExpandable>
            <ComponentExpandable componentName="Image">
                <ImageAvatar />
                <ImageAvatar src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/91163646_644726092755428_8399382294829203456_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=v-UM5fHBt7cAX_24GWk&oh=220aed5de09e8c111dc2e47cd4ad07fe&oe=5EFB8806" />
                <ImageAvatar size="100px" src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/91163646_644726092755428_8399382294829203456_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=v-UM5fHBt7cAX_24GWk&oh=220aed5de09e8c111dc2e47cd4ad07fe&oe=5EFB8806" />
                <ImageAvatar size="200px" src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/91163646_644726092755428_8399382294829203456_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=v-UM5fHBt7cAX_24GWk&oh=220aed5de09e8c111dc2e47cd4ad07fe&oe=5EFB8806" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Inputs">
                <Input />
                <Input iconRight="account" />
                <Input enableClear />
                <Input enableClear iconLeft="account" />
                <Input enableClear iconLeft="account" iconRight="account" />
                <Input containerType="outline" />
                <Input containerType="outline" enableClear />
                <Input containerType="outline" enableClear iconRight="account" iconLeft="account" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Checkboxes">
                <Checkbox onToggle={(value) => console.log(value)} value={true} size="20px" />
                <Checkbox onToggle={(value) => console.log(value)} />
                <Checkbox onToggle={(value) => console.log(value)} size="60px" color="success" />
                <Checkbox onToggle={(value) => console.log(value)} value={true} size="80px" />
                <Checkbox onToggle={(value) => console.log(value)} value={true} size="80px" iconName="close" color="danger" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Cards">
                <CardBase width="300px" height="unset">
                    <h1 className="__title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem.</h1>
                    <Icon name="cog" invert/>
                </CardBase>
                <CardBase width="300px" height="unset">
                    <h1 className="__title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem.</h1>
                    <Icon name="cog" invert />
                    <footer>
                        <Badge icon="cog" />
                    </footer>
                </CardBase>
                <CardBase width="500px" height="unset" color="success">
                    <h1 className="__title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem.</h1>
                    <Icon name="cog" color="success" invert/>
                    <footer>
                        <Badge icon="cog" text="texto no badge" color="danger"/>
                    </footer>
                </CardBase>
                <CardBase width="300px" height="200px">
                    <ImageAvatar src="https://www.superepi.com.br/fotos/extragrande/1232fe1/abafador-de-ruido-ark-plus-kalipso-17db-ca-37918.jpg" size="100px" style={{margin: 15}}/>
                    <h1 className="__title" style={{WebkitLineClamp: 2}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem.</h1>
                    <footer>
                        <Badge color="success" text={10}/>
                    </footer>
                </CardBase>
            </ComponentExpandable>
        </PageBody>
    );
}
