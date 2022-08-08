import React, { useState } from "react";
import {
  useMarketplace,
  useActiveListings,
  useContractMetadata,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { IoHeart, IoShareSocial } from "react-icons/io5";
import { MARKETPLACE_ADDRESS } from "../const/contract";
import styles from "../styles/Theme.module.scss";

export default function Listings() {
  const marketplace = useMarketplace(MARKETPLACE_ADDRESS);
  const { data: listings, isLoading } = useActiveListings(marketplace);

  console.log(listings);

  // Load contract metadata
  const { data: contractMetadata, isLoading: loadingMetadata } =
    useContractMetadata(MARKETPLACE_ADDRESS);

  const [filter, setFilter] = useState(0); // 0 = direct, auction = 1

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        {/* Toggle between direct listing and auction listing */}
        <div className={styles.hidden}>
          <input
            type="radio"
            name="listingType"
            id="directListing"
            value="directListing"
            defaultChecked
            className={styles.listingType}
            onClick={() => setFilter(0)}
          />
          <label htmlFor="directListing" className={styles.listingTypeLabel}>
            Direct Listing
          </label>
          <input
            type="radio"
            name="listingType"
            id="auctionListing"
            value="auctionListing"
            className={styles.listingType}
            onClick={() => setFilter(1)}
          />
          <label htmlFor="auctionListing" className={styles.listingTypeLabel}>
            Auction Listing
          </label>
        </div>
        <div className={styles.detailPageContainer}>
          {!loadingMetadata ? (
            <>
              <h1>{contractMetadata?.name}</h1>
              <p>{contractMetadata?.description}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
        </div>


        {!isLoading ? (
          <div className={styles.nftBoxGrid}>
            {listings
              ?.filter((listing) => listing.type === filter)
              ?.map((listing) => (
                <a
                  className={styles.nftBox}
                  key={listing.id.toString()}
                  href={`/nft_collection/${listing.id}`}
                >
                  <ThirdwebNftMedia
                    metadata={{ ...listing.asset }}
                    className={styles.nftMedia}
                  />
                  <h4 style={{marginBottom: '0px'}}>{listing.asset.name}</h4>
<div className={styles.btnBody}>
<div className={styles.icons}>
<IoHeart size={28}/>
<IoShareSocial size={28}/>
</div>
                  <p className={styles.pils} style={{float: 'right', padding: '3px 8px', marginRight: '15px'}}>
                    <i className={styles.polygon}></i>
                    {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                    {listing.buyoutCurrencyValuePerToken.symbol}
                  </p>
</div>
                </a>
              ))}
          </div>
        ) : (
          <div className={styles.loadingOrError}><i className={styles.spinner}></i></div>
        )}
      </div>
    </div>
  );
}
