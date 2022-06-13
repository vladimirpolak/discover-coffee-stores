import {useRouter} from 'next/router'

const CoffeeStore = () => {
    const router = useRouter();
    return <div>Some Coffee store '{router.query.id}'</div>;
};

export default CoffeeStore;