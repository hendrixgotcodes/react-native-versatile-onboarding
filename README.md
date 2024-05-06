<p align="center">
  <img src="logo.png" alt="NativeWind Logo" width="150"/>
</p>
<h1 align="center">React Native Versatile Onboarding</h1>

React-native-versatile-onboarding is a highly customizable and easy-to-integrate React Native library designed to enhance the onboarding experience for mobile applications. This library offers a rich set of animations, flexible layouts, and an intuitive API that caters to both developers and designers looking to create compelling, informative, and interactive onboarding flows.

## Installation

```sh
npm install react-native-versatile-onboarding
```

## Usage

```js
import VersatileOnboarding from 'react-native-versatile-onboarding';

// ...

export default function App() {
  return (
    <VersatileOnboarding>
      <View>
        <Text>Page 1</Text>
      </View>
      <View>
        <Text>Page 2</Text>
      </View>
      <View>
        <Text>Page 3</Text>
      </View>
    </VersatileOnboarding>
  );
}
```

## Configuration
<div style="overflow: auto;">
    <table border="1">
        <thead>
            <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Children</td>
                <td>
                    ReactElement&lt;typeof View&gt; | Array&lt;ReactElement&lt;typeof View&gt;&gt;
                </td>
                <td>No default; you must specify at least one &lt;View /&gt; component.</td>
                <td>
                    This property should be a list of &lt;View /&gt; components. It may be updated in the future to support additional component types.
                </td>
            </tr>
            <tr>
                <td>Footer (optional)</td>
                <td>ReactNode</td>
                <td>Built-in footer component</td>
                <td>Provides an optional footer component that can be customized or replaced.</td>
            </tr>
            <tr>
                <td>footerBtnStyle (optional)</td>
                <td>StyleProp&lt;ViewStyle&gt;</td>
                <td>Built-in footer styles</td>
                <td>Allows customization of the default styles applied to the provided footer component.</td>
            </tr>
            <tr>
                <td>PaginatorType (optional)</td>
                <td>"dot" | "dash"</td>
                <td>"dot"</td>
                <td>Specifies the appearance of the pagination element, either as dots or dashes.</td>
            </tr>
            <tr>
                <td>onNavigate (optional)</td>
                <td>(currentPageIndex: number) =&gt; any</td>
                <td>undefined</td>
                <td>Callback that is invoked when the onboarding component navigates to a new page.</td>
            </tr>
            <tr>
                <td>onNavigateToEnd (optional)</td>
                <td>( ) =&gt; any</td>
                <td>undefined</td>
                <td>Callback that is invoked when the onboarding component finishes all navigation.</td>
            </tr>
        </tbody>
    </table>
</div>



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with ❤️
