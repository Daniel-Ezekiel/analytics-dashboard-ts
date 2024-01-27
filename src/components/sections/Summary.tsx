import { BoxTick, Coin1, I3DRotate, ShoppingCart } from "iconsax-react";
import { SummaryCard } from "../SummaryCard";

export const Summary = () => {
  return (
    <section className='grid gap-4 min-[425px]:grid-cols-2 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:row-start-1'>
      <SummaryCard
        cardTitle='Total Order'
        cardValue={350}
        cardRate={23.5}
        isRatePositive={true}
        chartImageURL='./card-chart-1.png'
      >
        <BoxTick size='24' color='#34caa5' variant='Bulk' />
      </SummaryCard>

      <SummaryCard
        cardTitle='Total Refund'
        cardValue={270}
        cardRate={23.5}
        isRatePositive={false}
        chartImageURL='./card-chart-2.png'
      >
        <I3DRotate size='24' color='#34caa5' variant='Bulk' />
      </SummaryCard>

      <SummaryCard
        cardTitle='Average Sales'
        cardValue={1567}
        cardRate={23.5}
        isRatePositive={false}
        chartImageURL='./card-chart-2.png'
      >
        <ShoppingCart size='24' color='#34caa5' variant='Bulk' />
      </SummaryCard>

      <SummaryCard
        cardTitle='Total Income'
        cardValue={"$350.000"}
        cardRate={23.5}
        isRatePositive={true}
        chartImageURL='./card-chart-1.png'
      >
        <Coin1 size='24' color='#34caa5' variant='Bulk' />
      </SummaryCard>
    </section>
  );
};
