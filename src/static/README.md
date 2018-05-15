### NAI (New Americans Initiative) Dataset
We got a document from ICIRR a long time ago with organization names and details
about what services they offer. This was a .doc that wasn't conveniently
machine readable. A volunteer, Cat, turned this into a parsable csv file!
That file is nai_partners_contact_list.csv.

However, it was nice to have column names that were a bit easier and shorter,
so we created `massage_partner_list.py` to massage it again into a slightly
nicer format.

In addition, we amended that information (by hand) with the latitude and
longitude of each of the organizations. This is because using
the google maps API to convert addresses to lat/longs (a) uses api calls
that are unnecessary since the data is static and (b) delays the loading
of the markers.

If we change the partner list we may want to write a script
to calculate the lat/longs automatically since I think I copy/pasted
them all over from the javascript console.

Separately, we may want to consider switching to a different mapping library,
like Open Street Maps or Plotly, in order to be more open-source friendly
and also to save money (when we get enough traffic to exceed google's free tier).
