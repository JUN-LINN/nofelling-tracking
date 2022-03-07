
// [START create_counter]
function createCounter(ref, num_shards) {
  var batch = db.batch();

  // Initialize the counter document
  batch.set(ref, {
    num_shards: num_shards
  });

  // Initialize each shard with count=0
  for (let i = 0; i < num_shards; i++) {
    const shardRef = ref.collection('shards').doc(i.toString());
    batch.set(shardRef, {
      count: 0
    });
  }

  // Commit the write batch
  return batch.commit();
}
// [END create_counter]

// [START increment_counter]
function incrementCounter(db, ref, num_shards) {
  // Select a shard of the counter at random
  const shard_id = Math.floor(Math.random() * num_shards).toString();
  const shard_ref = ref.collection('shards').doc(shard_id);

  // Update count
  return shard_ref.update("count", firebase.firestore.FieldValue.increment(1));
}
// [END increment_counter]

// [START get_count]
function getCount(ref) {
  // Sum the count of each shard in the subcollection
  return ref.collection('shards').get().then((snapshot) => {
    let total_count = 0;
    snapshot.forEach((doc) => {
      total_count += doc.data().count;
    });

    return total_count;
  });
}
// [END get_count]
