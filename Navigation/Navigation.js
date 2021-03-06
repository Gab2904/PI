import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import AdicionarProduto from '../components/AdicionarProduto';
import EditarProduto from '../components/EditarProduto';
import ExibirProduto from '../components/ExibirProduto';
import ProdutoItem from '../components/ProdutoItem';
import Home from '../components/Home';
import Cores from '../Cores/Cores';
import Menu from '../components/Menu';
import Login from '../components/Login'
import LoginADM from '../components/LoginADM';
import CadastroLoja from '../components/CadastroLoja';


const Navigation = createStackNavigator({
    Menu: Menu,
    Login: Login,
    LoginADM: LoginADM,
    CadastroLoja: CadastroLoja,
    Home: Home,
    Criar: AdicionarProduto,
    Editar: EditarProduto,
    Item: ProdutoItem,
    Exibir: ExibirProduto
}, { defaultNavigationOptions: {
        headerStyle: {
        backGroundColor: Platform.OS === 'android' ? Cores.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? Cores.primary : Cores.primary
    }
});

export default createAppContainer(Navigation);