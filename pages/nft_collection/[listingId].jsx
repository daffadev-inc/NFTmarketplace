import {
  MediaRenderer,
  useMarketplace,
  useNetwork,
  useNetworkMismatch,
  useListing,
  useAddress,
  useMakeBid,
  useBuyNow,
} from "@thirdweb-dev/react";
import Head from 'next/head'
import { ChainId, ListingType, NATIVE_TOKENS } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import { useState } from "react";
import Script from 'next/script';
import { MARKETPLACE_ADDRESS } from "../../const/contract";
import Swal from 'sweetalert2';
import styles from "../../styles/Theme.module.scss";

const pageTitle = 'Listing'
const siteTitle = 'DaffaDev NFT marketplace'
export default function ListingPage() {
  const router = useRouter();
  const { listingId } = router.query;

  const address = useAddress();
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const marketplace = useMarketplace(MARKETPLACE_ADDRESS);
  const { data: listing, isLoading: loadingListing } = useListing(
    marketplace,
    listingId
  );

  if (listing?.secondsUntilEnd === 0) {
  }

  const [bidAmount, setBidAmount] = useState("");

  if (loadingListing) {
    return <div className={styles.loadingOrError}><i className={styles.spinner}></i></div>;
  }

  if (!listing) {
    return <div className={styles.loadingOrError}><h3>Listing not found</h3></div>;
  }

  async function createBidOrOffer() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork && switchNetwork(ChainId.Mumbai);
        return;
      }

      // If the listing type is a direct listing, then we can create an offer.
      if (listing?.type === ListingType.Direct) {
        await marketplace?.direct.makeOffer(
          listingId, // The listingId of the listing we want to make an offer for
          1, // Quantity = 1
          NATIVE_TOKENS[ChainId.Mumbai].wrapped.address, // Wrapped Ether address on Rinkeby
          bidAmount // The offer amount the user entered
        );
      }

      // If the listing type is an auction listing, then we can create a bid.
      if (listing?.type === ListingType.Auction) {
        await marketplace?.auction.makeBid(listingId, bidAmount);
      }

      alert(
        `${
          listing?.type === ListingType.Auction ? "Bid" : "Offer"
        } created successfully!`
      );
    } catch (error) {
      console.error(error.message || "something went wrong");
      alert(error.message || "something went wrong");
    }
  }

  async function buyNft() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork && switchNetwork(ChainId.Mumbai);
        return;
      }

      // Simple one-liner for buying the NFT
      await marketplace?.buyoutListing(listingId, 1);
      Swal.fire({
          title: 'Berhasil!',
          text: 'Pembelian NFT berhasil...',
          icon: 'success',
          confirmButtonText: 'Cool'
        }).then(function() {
            router.push(`/nft_collection`);
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
          title: 'Gagal!',
          text: 'Pembelian NFT Gagal...',
          icon: 'error',
          confirmButtonText: 'Okey'
        });
    }
  }

  return (
<>
      <Head>
        <title>{pageTitle} - {siteTitle}</title>
      </Head>
    <div className={styles.container}>
      <div className={styles.listingContainer}>
        <div className={styles.leftListing}>
          <MediaRenderer
            src={listing.asset.image}
            className={styles.mainNftImage}
          />
        </div>

        <div className={styles.rightListing}>
<div className={styles.titleSection}>
          <h1 style={{marginTop: '0px'}}>{listing.asset.name}</h1>
          <p>
            Owned by <b>{listing.sellerAddress?.slice(0, 6)}</b>
          <p>{listing.asset.tokenid}</p>
          </p>
</div>
<span>{listing.asset.description}</span>
<div className={styles.priceContent}>
          <h2 style={{display: 'flex', alignItems: 'center', border: '2px dotted', padding: '0 7px', height: 'fit-content', borderRadius: '25px'}}>
                    <i className={styles.polygon} style={{width: '34px', height: '34px'}}></i>
            <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
            {listing.buyoutCurrencyValuePerToken.symbol}
          </h2>

          <div
            className={styles.rowButton}
          >
            <button
              style={{ borderStyle: "none" }}
              className={styles.mainButton}
              onClick={buyNft}
            >
              Buy
            </button>
            <div
              style={{
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <input
                type="text"
                name="bidAmount"
                className={styles.textInput}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Amount"
                style={{ marginTop: 0, marginLeft: 0, width: 128 }}
              />
              <button
                className={styles.mainButton}
                onClick={createBidOrOffer}
                style={{
                  borderStyle: "none",
                  background: "transparent",
                  width: "fit-content",
                }}
              >
                Make Offer
              </button>
            </div>
</div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
